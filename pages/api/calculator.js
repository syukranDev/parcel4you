export default async function handler(req, res) {
    if(req.method === 'GET'){
        // if(!req.body){
        //     return res.status(400).json({ error: 'Dont have form data!'})
        // }

        // const { username, email, password } = req.body

        // let dataPromise1 = {
        //     "origin_country": req.body.from_country, 
        //     "origin_state": req.body.from_state,
        //     "origin_postcode": req.body.from_postcode,

        //     "destination_country":req.body.to_country,
        //     "destination_state": req.body.to_state,
        //     "destination_postcode": req.body.to_postcode,

        //     "length": req.body.length ,
        //     "width": req.body.width ,
        //     "height": req.body.height ,
        //     "selected_type": req.body.type,
        //     "parcel_weight": req.body.parcel_weight,
        //     "document_weight": '' //focused on parc
        // }

        // const config = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(dataPromise1)
        // }

        // await fetch('https://www.citylinkexpress.com/wp-json/wp/v2/getShippingRate', config)
        // .then(res => res.json())
        // .then(responses => {
        //     return res.json({ 
        //         courier: 'Citilink',
        //         rateInRinggit: responses
        //     })
        // })
        let outputData = []
        let {   pick_code,
                pick_state,
                pick_country,
                send_code,
                send_state,
                send_country,
                weight,
                width,
                length,
                height,
                date_coll   } = req.body
        const domain = 'https://demo.connect.easyparcel.my/?ac=';
        const action = 'EPRateCheckingBulk';
        const postData = {
        api: process.env.EZPARCEL_TOKEN,
        bulk: [
            {
            pick_code: '10050',
            pick_state: 'png',
            pick_country: 'MY',
            send_code: '11950',
            send_state: 'png',
            send_country: 'MY',
            weight: '10',
            width: '2',
            length: '3',
            height: '4',
            date_coll: '2023-05-06'

            // pick_code,
            // pick_state,
            // pick_country,
            // send_code,
            // send_state,
            // send_country,
            // weight,
            // width,
            // length,
            // height,
            // date_coll
            }
        ]
        };

        await fetch(domain + action, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            data.result.forEach(item => {
                item.rates.forEach(rate => {
                  const serviceName = rate.service_name;
                  const price = rate.price;
                  outputData.push({ serviceName, price })
                });
              });
            res.json(outputData)
        })


    } else {
        res.status(500).json({ message: 'HTTP method invalid, only POST method allowed!'})
    }

}