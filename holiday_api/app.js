const months = document.querySelector('.drop-down');
const highestElement = document.getElementById('holiday');

for (let i = 1; i <= 12; i++) {

    const opt = document.createElement('option')
    opt.textContent = i
    opt.setAttribute('value', i)
    months.appendChild(opt)
};

months.addEventListener('change', (e) => {

    $.ajax({

        url: `https://holidayapi.com/v1/holidays?key=4732b503-1ff1-47ea-bc7e-f44dbda158df&country=US&year=2017&month=${e.target.value}`,
        success: function (results) {
            const el = document.getElementById('all_holidays');

            if (el) {
                el.remove();
            }

            const ul = document.createElement('ul');
            ul.setAttribute('id', 'all_holidays');
            const element = document.createElement('li');

            var data = [];
            var list = document.getElementById('all_holidays');

            results.holidays.forEach(item => {
                data.push({
                    node: item.name,
                    date: item.date
                })
            });
            // console.log(data)
            data.forEach(e => {
                const node = document.createElement('h3');
                const date = document.createElement('h5');
                node.textContent = e.node;
                date.textContent = e.date.slice(5, 10);
                element.appendChild(node);
                element.appendChild(date);
                element.className = 'list';
                ul.appendChild(element);
            })
            document.getElementById('remove_div').classList.remove('container');
            document.getElementById('remove_div').classList.add('show_container');
            highestElement.appendChild(ul);
        }
    });
})
$("#meSelect").click(function () {
    document.getElementById('month').remove();
});