import { loadStyle } from './style'
const dataKey = '_%&wts(+*{__'

    ;
(() => {
    class GuiController {

        constructor() {
            this.layer = null
            this.topBar = null
            this.container = null
        }

        createSubgrade() {
            let layer = this.createLayer()
            let topBar = this.createTopBar(layer)
            loadStyle()
            this.createDragHandle(topBar)
            this.createContainer(layer)
        }

        createLayer() {
            const layer = document.createElement('div')
            layer.classList.add('_wts-floor')
            document.body.appendChild(layer)
            this.layer = layer
            return layer
        }

        createDragHandle(topBar) {
            const d = document.createElement('div')
            
            d.classList.add('_wts-drag-handle')
            topBar.appendChild(d)

            let dragging = false
            let tLeft, tTop

            d.addEventListener('mousedown', (e) => {
                if (e.target == d) {
                    dragging = true
                    let moveElemRect = this.layer.getBoundingClientRect()
                    tLeft = e.clientX - moveElemRect.left
                    tTop = e.clientY - moveElemRect.top
                }
            })

            d.addEventListener('mouseup', (e) => {
                dragging = false
            })

            d.addEventListener('mousemove', (e) => {
                if (dragging) {
                    let moveX = e.clientX - tLeft
                    let moveY = e.clientY - tTop

                    this.layer.style.left = moveX + 'px'
                    this.layer.style.top = moveY + 'px'
                }
            })
        }

        createTopBar(layer) {
            const topBar = document.createElement('div')
            topBar.classList.add('_wts-top-bar')
            this.topBar = topBar
            layer.appendChild(topBar)
            return topBar
        }

        createContainer(layer) {
            const container = document.createElement('div')
            container.classList.add('_wts-container')
            this.container = container
            layer.appendChild(container)
        }

        getLayer() {
            return this.layer
        }

        getContainer() {
            return this.container
        }

        addTemplateToContainer(templateStr) {
            this.container.innerHTML = templateStr
        }

        setLayerBackgroundColor(backgroundColor) {
            this.layer.style.backgroundColor = backgroundColor
        }

    }

    window._wts = new GuiController()
})()