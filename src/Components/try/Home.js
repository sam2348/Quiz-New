import React,{useState} from 'react';

const Home = () => {
  const [storeData,setStoreData]=useState(false)

  console.log(storeData)
  const inputHandler =()=>{
    if(storeData === storeData){
      setStoreData(true);
    }else{
      setStoreData(false);
    }
  } 
  return (
    <>
        <div className="container text-start fs-5" style={{ width: "400px" }} >
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <input className="form-check-input mx-3" type="radio" name="Answer"
                id="flexRadioDefault" onChange={inputHandler}/>
              sandeep
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label " htmlFor="flexRadioDefault2">
              <input className="form-check-input mx-3" type="radio" name="Answer"
                id="flexRadioDefault"  onChange={inputHandler} />
              ravi
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label " htmlFor="flexRadioDefault3">
              <input className="form-check-input mx-3" type="radio" name="Answer"
                id="flexRadioDefault" onChange={inputHandler} />
              yuvraj
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              <input className="form-check-input mx-3" type="radio" name="Answer"
                id="flexRadioDefault" onChange={inputHandler} />
              ajay
            </label>
          </div>
        </div>
    </>
  )
}

export default Home;