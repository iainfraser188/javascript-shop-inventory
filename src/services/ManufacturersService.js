const baseURL = "/api/manufacturers/"

  const ManufacturersService = {
    getManufacturers() {
      return fetch(baseURL)
      .then(res => res.json())
      .then(res => console.log(res))
    },

    postManufacturers(payload) {
      return fetch(baseURL, {
        method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }
        })
      .then(res => res.json())
    }


  };



export default ManufacturersService;