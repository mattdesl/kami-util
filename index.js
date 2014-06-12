var GLContextWrapper = require('./wrapper');

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
module.exports.wrapContext = function(gl) {
    if (typeof window.WebGLRenderingContext !== "undefined" && gl instanceof window.WebGLRenderingContext) {
        return new GLContextWrapper(gl);
    } else
        return gl;
};