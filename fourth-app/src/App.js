import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import SearchResult from './Components/searchResults/SearchResult';

export const BASE_URL= "http://localhost:9000";

function App() {
  const[data,setData] = useState(null);
  const[filteredData, setFilteredData] = useState();
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const[selectedBtn, setSlectedBtn] = useState("All");

  useEffect(()=>{
    //network call
    const fetchFoodData= async()=>{
      setLoading(true);
      try{
        //fetch is JS API by which we can call network
        const response = await fetch(BASE_URL);
  
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      }
      catch(error){
        setError("Unable to fetch data");
      }
    }
    fetchFoodData();
  }, []);
  //Search when there is change in the input
  const searchFood =(e)=>{
    const searchValue = e.target.value;

    if (searchValue === "")
      setFilteredData(null);
 
    const food = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(food);
  }
  const filterFood=(type)=>{
   // console.log(type);
    if(type == "All"){
      setSlectedBtn("all");
      setFilteredData(data);
      return;
    }
    const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
    //console.log(filter);
    setSlectedBtn(type);
      setFilteredData(filter);
  }
  const filterBtns=[
    {
      name:"All",
      type:"All"
    },
    {
      name:"breakfast",
      type:"breakfast"
    },
    {
      name:"lunch",
      type:"lunch"
    },
    {
      name:"dinner",
      type:"dinner"
    }
  ]

  if(error) return <div>{error}</div>
  if(loading) return <div>loading</div>
  return (
    <>
    <Container>
      <TopContainer>
        <div className = "logo">
          <img src="/FoodLogo.jpg" width={"100px"} alt="logo" />
        </div>
        <div className="search">
        <input
        onChange ={searchFood}
        placeholder='Search Food...'/>
        </div>
      </TopContainer>
    <FilterContainer>
      
        {
          filterBtns.map((e)=>(
            <Button 
            isSelected={selectedBtn == e.type}
            key={e.name} 
            onClick={()=>{filterFood(e.type)}}
            >{e.type}
            </Button>))
        }
        
    
    </FilterContainer>
  
    </Container>
    <SearchResult data={filteredData}/>
    </>
  );
}

export default App;

export const Container= styled.div`
 max-width:1200px;
 margin:0 auto;
`
const TopContainer = styled.section`
  height:140px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:18px;
  .search{
  input{
  background-color: transparent;
  border: 1px solid red;
  color:white;
  border-radius:5px;
  height:40px;
  padding: 0 10px;
  &::placeholder{
  color:white;
  }
  }}
  @media(0<width<600px){
  flex-direction:column;
  height:200px;
  }
`
const FilterContainer = styled.section`
display:flex;
gap:12px;
justify-content:center;
padding-bottom:20px;

`
export const Button = styled.button`
background-color:${({isSelected})=>isSelected?"#ff5590": "#ff4343" } ;
outline:1px solid ${({isSelected})=>isSelected?"white": "#ff4343" } ;
border-radius:5px;
padding: 6px 12px;
border:none;
color:white;
cursor:pointer;
&:hover{
background-color:#ff5590}
`

