export default class TableWebComponent {
    render(data) {
        const template = this.prepareData(data)
        document.body.insertAdjacentHTML("afterBegin", template)
    }

    prepareData(data) {
        const [firstItem] = data
        const joinLists = list => list.join('')

        const tHeaders = Object.keys(firstItem)
            .map(text => `<th scope=col>${text}</th>`)

        const tbodyValues = data
            .map(item => Object.values(item))
            .map(item => item.map(value => `<td>${value}</td>`))
            .map(tds => `<tr>${joinLists(tds)}</tr>`)


        const template = `
            <table class="table table-light">
                <thead>
                    <tr>${joinLists(tHeaders)}</tr>
                </thead>
                <tbody>
                    ${joinLists(tbodyValues)}
                </tbody>
            </table>
      `
        return template
    }
}