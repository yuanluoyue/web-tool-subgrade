import { moveIcon } from './iconString'

export const loadStyle = () => {
    const styleDom = document.createElement('style')
    styleDom.innerHTML = `
        ._wts-floor {
            position: fixed;
            display: block;
            padding: 0;
            margin: 0;
            z-index: 99999;
            top: 60px;
            left: 60px;
            background-color: rgba(255, 255, 255, 0.8);
            border: 2px solid gray;
            max-width: 500px;
            min-width: 200px;
            min-height: 200px;
        }

        ._wts-top-bar {
            height: 50px;
            width: 100%;
            background-color: rgba(23, 124, 176, 0.6);

        }

        ._wts-drag-handle {
            background-image: url(${moveIcon});
            display: block;
            float: right;
            cursor: move;
            height: 50px;
            width: 50px;
        }

        ._wts-container {

        }
    `
    document.head.appendChild(styleDom)
}