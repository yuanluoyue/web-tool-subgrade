import { loadStyle } from './style'

const dataKey = '_%&wts(+*{__'

const baseDataStruct = {
    position: {
        left: 60,
        top: 60
    },
    isHiddenContainer: false
}

    ;
(() => {
    class GuiController {

        constructor() {
            this.layer = null
            this.topBar = null
            this.container = null
            this.title = null
            this.dataRecord = null
            this.hiddenEmoji = null
        }

        // 初始化数据记录
        initDataRecord() {
            let d = localStorage.getItem(dataKey)
            if (d !== null) {
                // console.log('成功读取存档')
                this.dataRecord = JSON.parse(d)
            } else {
                // console.log('木有存档')
                this.dataRecord = JSON.parse(JSON.stringify(baseDataStruct))
            }
        }

        // 把要储存的数据记录到浏览器缓存
        saveData() {
            localStorage.setItem(dataKey, JSON.stringify(this.dataRecord))
        }

        // 初始化整个 ui
        createSubgrade() {
            this.initDataRecord()
            let layer = this.createLayer()
            let topBar = this.createTopBar(layer)
            loadStyle()
            this.createDragHandle(topBar)
            this.createTitle(topBar)
            this.createHiddenEmoji(topBar)
            this.createContainer(layer)
        }

        createLayer() {
            const layer = document.createElement('div')
            const position = this.dataRecord.position
            layer.classList.add('_wts-floor')
            document.body.appendChild(layer)
            this.layer = layer
            this.setLayerPosition(position.left, position.top)
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
                this.saveData()
            })

            d.addEventListener('mousemove', (e) => {
                if (dragging) {
                    let moveX = e.clientX - tLeft
                    let moveY = e.clientY - tTop
                    this.dataRecord.position.left = moveX
                    this.dataRecord.position.top = moveY
                    this.setLayerPosition(moveX, moveY)
                }
            })
        }

        // 设置底层 ui 位置
        setLayerPosition(left, top) {
            this.layer.style.left = left + 'px'
            this.layer.style.top = top + 'px'
        }

        // 创建顶部栏
        createTopBar(layer) {
            const topBar = document.createElement('div')
            topBar.classList.add('_wts-top-bar')
            this.topBar = topBar
            layer.appendChild(topBar)
            return topBar
        }

        // 创建标题
        createTitle(topBar) {
            const d = document.createElement('div')
            d.innerText = '科学家控制台'
            d.classList.add('_wts-title')
            this.title = d
            topBar.appendChild(d)
        }

        createHiddenEmoji(topBar) {
            const d = document.createElement('div')
            d.classList.add('_wts-emoji')

            topBar.appendChild(d)
            this.hiddenEmoji = d

            this.setHiddenEmoji(this.dataRecord.isHiddenContainer)

            d.onclick = () => {
                let isHid = this.dataRecord.isHiddenContainer
                this.dataRecord.isHiddenContainer = !isHid
                this.setHiddenEmoji(!isHid)
                this.saveData()
            }
        }

        setHiddenEmoji(isHiddenContainer) {
            const e = this.hiddenEmoji
            isHiddenContainer ? e.innerText = '( X﹏X )' : e.innerText = '(⊙﹏⊙)'
            if (this.container) {
                this.container.style.display = isHiddenContainer ? 'none' : 'block'
            }
        }

        createContainer(layer) {
            const container = document.createElement('div')
            const isHid = this.dataRecord.isHiddenContainer
            container.style.display = isHid ? 'none' : 'block'
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

        setTitle(title) {
            this.title.innerText = title
        }

    }

    window._wts = new GuiController()
})()