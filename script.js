fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        const template = document.querySelector('#comment-template').innerHTML;
        data.forEach(user => {
            const markup = template
                .replace('{{name}}', user.name)
                .replace('{{email}}', user.email)
                .replace('{{body}}', user.body);

            document.querySelector('div').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));