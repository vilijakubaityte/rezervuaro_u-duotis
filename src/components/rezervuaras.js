import { useState } from "react";


function Rezervuaras (){
    
    const [talpa, setTalpa]=useState(0);
    const [greitis, setGreitis]=useState(0);
    const [laikas, setLaikas]=useState(0);
    const [litrai, setLitrai]=useState(0);
    const [proc, setRezultatasProc]=useState(100);
    const [procentai, setRezultatasProcentai]=useState(0);


    const [showAlert, setShowAlert] = useState(false);
    

    const skaiciuotiHandler=()=>{
    setRezultatasProcentai(((greitis * laikas) * proc) / talpa);
    setShowAlert(true);
    setGreitis("");
    setLaikas("");
    setTalpa("");
    }

    

    let spalvos = ''

        if(procentai < 80){
            spalvos = <div class="alert alert-success mt-4" role="alert">
            Rezervuaro talpa yra pripildyta {procentai} %.
            </div>

        } else if (procentai >=80 && procentai <= 100){
            spalvos = <div class="alert alert-warning mt-4" role="alert">
            Rezervuaro talpa yra kritiškai pripildyta! Užpildyta iš viso {procentai} % !
            </div>

        }   else if (procentai > 100){
            spalvos = <div class="alert alert-danger mt-4" role="alert">
            Rezervuaro talpa yra perpildyta! Užpildyta iš viso {procentai} % !
            </div>

        }
    


    const changeTalpaHandler=(event)=>{
    setTalpa(event.target.value);

       }

    const changeGreitisHandler=(event)=>{
    setGreitis(event.target.value);
        }

    const changeLaikasHandler=(event)=>{
    setLaikas(event.target.value);
        }


    return (
        
        <div class="container mt-5">
        <div className="col-md-12">
        <div className="row">
            <div className="col-md-6">
                <div className="card mt-3">
                <div className="card-header bg-info fs-3 text">
                Lietaus rezervuaro užpildymo apskaičiavimas:
                </div>
                <div className="card-body">
                <form>
                <div className="mb-2" >
                <label className="form-label fs-5 text">Rezervuaro talpa (l)</label>
                <input className="form-control" type="number" onChange={changeTalpaHandler} value={talpa} /> 

                </div>
                <div className="mb-2" >
                    <label className="form-label fs-5">Rezervuaro pildymo greitis (l/val.)</label>
                    <input className="form-control" type="number" onChange={changeGreitisHandler} value={greitis}/> 

                    </div> 
                <div className="mb-2" >
                    <label className="form-label fs-5">Rezervuaro pildymo laikas (val.)</label>
                    <input className="form-control" type="number" onChange={changeLaikasHandler} value={laikas}/> 

                    </div>
                    <button type="button" className="btn btn-info mt-3 fs-5" onClick={skaiciuotiHandler}>Skaičiuoti</button>
                        </form>
                    </div>
                </div>
            </div>
        
            <div className="container col-md-6 mt-3">
                    <div className="card">
                        <div className="card-header bg-info fs-3 text">
                            Rezultatas:
                        </div>
                        <div className="card-body fs-5">
                             Užpildyta {procentai} % rezervuaro.
                        </div>
                
                    </div>
                </div>
                <div>
                    {showAlert && spalvos}
                </div>
                

        </div>
    
    </div>
    </div>
   
   
    )
}

export default Rezervuaras;