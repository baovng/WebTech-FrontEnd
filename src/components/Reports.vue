<template>

<download-csv
	class   = "btn btn-primary"
	:data   = "temp"
	name    = "reports.xls">
</download-csv>




</template>

<script>
import axios from 'axios'
export default {
  name: 'Reports',
  data() {
    return {
        temp:[],
        requests:[],
        json_data: [
            {
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15',
                'phone': {
                    'mobile': '1-541-754-3010',
                    'landline': '(541) 754-3010'
                }
            },
            {
                'name': 'Thessaloniki',
                'city': 'Athens',
                'country': 'Greece',
                'birthdate': '1987-11-23',
                'phone': {
                    'mobile': '+1 855 275 5071',
                    'landline': '(2741) 2621-244'
                }
            }
        ]
    }
  },
  computed:{
      filterReq(){
        for(var i = 0 ; i < this.requests.length;i++){
            if(this.requests[i].status=="Finished"){
                this.temp.push(this.requests[i])
            }
        }
        console.log(this.temp)
      }
  },
  methods: {
    converter() {
        alert("Hello")
      var xls = json2xls(allUsers)
      fs.writeFileSync(filename, xls, 'binary', (err) => {
        if (err) {
          console.log('writeFileSync :', err)
        }
        console.log(filename + ' file is saved!')
      })
    },
  },

  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/requests`);
      this.requests = response.data;
      
    } catch (e) {
      this.errors.push(e);
    }
    this.filterReq;
  },
}
</script>
