import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            currencies: [],
            selectedCurrency: null
        },
        mounted(){
            this.fetchCurrencies();
        },
        computed: {
            allCurrencies: function(){
                return this.currencies
            },

            // convertCurrency: function(){
            //     return this.currencie
            // }
            // selectedCurrencyFunction: function () {
            //     return this.currencies.find()
            // }
        },
        methods: {
            fetchCurrencies: function(){
                fetch('https://api.exchangeratesapi.io/latest')
                    .then(response => response.json())
                    .then(data => this.currencies = data)
                    .catch(err => console.error(err))
            },
            

        }
    })
})