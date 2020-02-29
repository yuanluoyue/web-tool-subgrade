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
            overflow: hidden;
            background-color: rgba(255, 255, 255, 0.8);
            border: 2px solid gray;
            max-width: 500px;
            min-width: 250px;
        }

        ._wts-top-bar {
            padding: 6px;
            height: 50px;
            width: 100%;
            background-color: rgba(23, 124, 176, 0.6);

        }

        ._wts-drag-handle {
            background-image: url(${moveIcon});
            background-position: center;
            background-size: 90%;
            display: block;
            float: right;
            cursor: move;
            height: 50px;
            width: 50px;
        }

        ._wts-title {
            display: inline-block;
            padding: 5px;
            line-height: 40px;
        }

        ._wts-emoji {
            display: inline-block;
            margin-left: 20px;
            cursor: pointer;
            font-size: 20px;
            font-weight: 900;
        }

        ._wts-container {
            min-height: 200px;
            max-height: 800px;
        }
    `
    document.head.appendChild(styleDom)
}