import React, { useEffect, useState } from 'react'
import ItemsMap from './ItemsMap';

export default function Items() {
    const noimage="data:image/png;base64,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"
    const [articles, setarticles] = useState([])
    const [totalResults, settotalResults] = useState(0)
    useEffect( 
        ()=>{
        const load=async () => {
        console.log("cDm");
        let url = ` https://api.tvmaze.com/search/shows?q=all`;
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata[1].show.image.medium);
        setarticles(parsedata)
        settotalResults(parsedata.totalResults)
        };
        load();
     }, []);

  return (
    <div>
      
                    <div className="container my-3 " >
                        <div className="row">
                            {articles.map((element) =>{
                             return (
                                <div className="col-md-4 mb-4" key={element.show.id}>
                                    <ItemsMap title={element.show.name }
                                        desc={element.show.summary}
                                         imageUrl={element.show.image?element.show.image.medium:noimage} newsUrl={element.show.officialSite}
                                         author={element.show.status} date={element.show.premiered}
                                         source={element.show.status} />
                                        
                                </div>)
})}
                        </div>
                    </div>


    </div>
  )
}
