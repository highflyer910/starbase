var app = new Vue({
     el: '#app',
     data: {
      title: 'Generate your team'
     },
     methods: {
      fetchCharacter() {
        fetch('https://swapi.co/api/people/1', {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => console.log(json))
      }
     }
	})
