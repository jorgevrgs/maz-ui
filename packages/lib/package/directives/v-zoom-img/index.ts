import { vZoomImg } from './zoom-img.directive'

const plugin = {
  install(app) {
    app.directive('zoom-img', vZoomImg)
  },
}

export { plugin as vZoomImgInstall }

export { vZoomImg } from './zoom-img.directive'
export type { vZoomImgBinding, vZoomImgOptions } from './zoom-img.handler'
