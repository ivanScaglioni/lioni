

export default function Notfound(props) {


 
    if(props.status == 'error'){
        return (
            <div className="res-err-msg">

            Something went wrong, try again
                            
        </div>
        );
    }else{
        return (
            <div className="loading">
        
                <div className="point"></div>
                
                <div className="point"></div>
                
                <div className="point"></div>
                
                <div className="point"></div>

            </div>

        );

    }

   


}