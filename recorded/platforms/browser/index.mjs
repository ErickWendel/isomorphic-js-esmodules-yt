export default class TableWebComponent {
    render(data) {
        const htmlTemplate = this.prepareData(data)

       document.body.insertAdjacentHTML('afterBegin', htmlTemplate)
    }

    prepareData(data) {
        const [ firstItem ] = data
        const joinLists = list => list.join('')

        const tHeaders = Object.keys(firstItem)
            .map(text => `<th scope=col>${text}</th>`)

        const tBody = data
            .map(item => Object.values(item))
            .map(item => item.map(value => `<td>${value}</td>`))
            .map(tds => `<tr>${joinLists(tds)}</tr>`)

        const template = `
        <table class="table table-light">
            <thead>
                ${joinLists(tHeaders)}
            </thead>
            <tbody>
                ${joinLists(tBody)}                
            </tbody>
        </table>
        `

        return template

    }
}