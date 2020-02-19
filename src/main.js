(() => {
    class GuiController {

        constructor() {
            this.layer = null
        }

        createSubgrade() {
            let layer = this.createLayer()
            this.createDragHandle(layer)
        }

        createLayer() {
            const layer = document.createElement('div')
            layer.style.display = 'block'
            layer.style.padding = 0
            layer.style.margin = 0
            layer.style.zIndex = 99999
            layer.style.position = 'fixed'
            layer.style.top = 60 + 'px'
            layer.style.left = 60 + 'px'
            layer.style.backgroundColor = 'rgba(255,255,255,0.8)'
            layer.style.border = 2 + 'px' + ' solid' + ' gray'
            layer.style.minWidth = 200 + 'px'
            layer.style.minHeight = 200 + 'px'

            document.body.appendChild(layer)
            this.layer = layer
            return layer
        }

        createDragHandle(layer) {
            const d = document.createElement('div')
            d.innerText = '《☸》'
            d.style.display = 'block'
            d.style.float = 'right'
            d.style.cursor = 'move'
            d.style.color = 'red'
            layer.appendChild(d)

            let dragging = false
            let tLeft, tTop

            d.addEventListener('mousedown', (e) => {
                if (e.target == d) {
                    dragging = true
                    let moveElemRect = layer.getBoundingClientRect()
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

                    layer.style.left = moveX + 'px'
                    layer.style.top = moveY + 'px'
                }
            })
        }

    }

    window._wts = new GuiController()
})()