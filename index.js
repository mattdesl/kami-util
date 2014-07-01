var GLContextWrapper = require('./wrapper');

function wrapContext(gl) {
    //Chrome's WebGLInspector wraps it with a different class
    //and then puts the original in 'rawgl' property
    var rawgl = gl && gl.rawgl ? gl.rawgl : gl;
    if (typeof window.WebGLRenderingContext !== "undefined" && rawgl instanceof window.WebGLRenderingContext) {
        return new GLContextWrapper(gl);
    } else
        return gl;
}

/**
 * Duck-types WebGLRenderingContext / kami.WebGLContext.
 *
 * If WebGLRenderingContext is passed, the object will not have its
 * state managed during context loss/restore. If a Kami WebGLContext
 * is passed, the object will try to maintain its state during lost/restore.
 * 
 * @param  {WebGLRenderingContext|kami.WebGLContext} gl the GL context
 * @return {Object|kami.WebGLContext} a wrapper that has a `gl` property
 */
module.exports.wrapContext = wrapContext;

module.exports.BaseObject = function(context) {
    if (!context || typeof context !== "object")
        throw "valid GL context not specified";

    this.context = wrapContext(context);
};