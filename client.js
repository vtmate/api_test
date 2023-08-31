const holder = document.getElementById("data-holder");

fetch('http://localhost:5000/items')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error getting the JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            var div = document.createElement('div');
            var h1 = document.createElement('h1');
            var p = document.createElement('p');

            h1.textContent = element.name;
            p.textContent = element.age;
            
            if(element.gender == "F") div.classList.add("female");
            else div.classList.add("male");

            div.append(h1);
            div.append(p);
            div.classList.add("card");

            holder.append(div);
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
