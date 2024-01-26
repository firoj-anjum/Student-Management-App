import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spiner/Spiner"
import { useNavigate } from "react-router-dom"
import { addData , dltdata, updateData} from '../../components/context/ContextProvider';
import {usergetfunc,deletfunc,exporttocsvfunc} from "../../services/Apis";
import Alert from 'react-bootstrap/Alert';
import "./home.css"
import { toast } from 'react-toastify';


const Home = () => {

  const [userdata,setUserData] = useState([]);
  const [showspin,setShowSpin] = useState(true);
  const [search,setSearch] = useState("");
  const [gender,setGender] = useState("All");
  const [semester,setSemester] = useState("All");
  const [sort,setSort] = useState("new");
  const [page,setPage] = useState(1);
  const [pageCount,setPageCount] = useState(0);

  const { useradd, setUseradd } = useContext(addData);
  
  const {update,setUpdate} = useContext(updateData);
  const {deletedata, setDLtdata} = useContext(dltdata);

  const navigate = useNavigate();

  const adduser = () => {
    navigate("/register")
  }

  // get user
  const userGet = async()=>{
    const response = await usergetfunc(search,gender,semester,sort,page);
    if(response.status === 200){
      setUserData(response.data.usersdata);
      setPageCount(response.data.Pagination.pageCount)
    }else{
      console.log("error for get user data")
    }
  }

  // user delete
  const deleteUser = async(id)=>{
    const response = await deletfunc(id);
    if(response.status === 200){
      userGet();
      setDLtdata(response.data)
    }else{
      toast.error("error")
    }
  }

  // export user
  const exportuser = async()=>{
    const response = await exporttocsvfunc();
    if(response.status === 200){
      window.open(response.data.downloadUrl,"blank")
    }else{
      toast.error("error !")
    }
  }

  // pagination
  // handle prev btn
  const handlePrevious = ()=>{
    setPage(()=>{
      if(page === 1) return page;
      return page - 1
    })
  }

  // handle next btn
  const handleNext = ()=>{
    setPage(()=>{
      if(page === pageCount) return page;
      return page + 1
    })
  }

  useEffect(()=>{
    console.log('In useEffect')
    userGet();
    setTimeout(()=>{
        setShowSpin(false)
    },1200)
  },[search,gender,semester,sort,page])

  return (
    <>
    {
      useradd ?  <Alert variant="success" onClose={() => setUseradd("")} dismissible>{useradd.fname.toUpperCase()} Succesfully Added</Alert>:""
    }

    {
      update ? <Alert variant="primary" onClose={() => setUpdate("")} dismissible>{update.fname.toUpperCase()} Succesfully Update</Alert>:""
    }

    {
      deletedata ? <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>{deletedata.fname.toUpperCase()} Succesfully Delete</Alert>:""
    }

      <div className="">
        <div className="main_div col-10 m-auto">
          {/* search add btn */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-3">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search"
                  aria-label="Search"
                  onChange={(e)=>setSearch(e.target.value)}
                />
                <Button variant="success" className='search_btn'>Search</Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="primary" onClick={adduser}> <i className="fa-solid fa-plus"></i>&nbsp; Add Student</Button>
            </div>
          </div>
          {/* export,gender,status */}

         
        </div>
        <div className='main_div2 col-10 m-auto'>


        <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
             
             <div className="filter_gender">
               <div className="filter">
                 <h3 className='text-white'>Filter By Gender</h3>
                 <div className="gender d-flex justify-content-between text-white">
                   <Form.Check
                     type={"radio"}
                     label={`All`}
                     name="gender"
                     value={"All"}
                     onChange={(e)=>setGender(e.target.value)}
                     defaultChecked
                   />
                   <Form.Check
                     type={"radio"}
                     label={`Male`}
                     name="gender"
                     value={"Male"}
                     onChange={(e)=>setGender(e.target.value)}
                   />
                   <Form.Check
                     type={"radio"}
                     label={`Female`}
                     name="gender"
                     value={"Female"}
                     onChange={(e)=>setGender(e.target.value)}
                   />
                 </div>
               </div>
             </div>
 
             {/* short by value */}
             <div className="filter_newold text-white">
               <h3>Sort By Value</h3>
               <Dropdown className='text-center'>
                 <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                   <i class="fa-solid fa-sort"></i>
                 </Dropdown.Toggle>
                 <Dropdown.Menu>
                   <Dropdown.Item onClick={()=>setSort("new")}>New</Dropdown.Item>
                   <Dropdown.Item onClick={()=>setSort("old")}>Old</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
             </div>
 
             {/* filter by status */}
             <div className="filter_status text-white">
               <div className="status">
                 <h3>Filter By Status</h3>
                 <div className="status_radio d-flex justify-content-between flex-wrap">
                   <Form.Check
                     type={"radio"}
                     label={`All`}
                     name="semester"
                     value={"All"}
                     onChange={(e)=>setSemester(e.target.value)}
                     defaultChecked
                   />
                   <Form.Check
                     type={"radio"}
                     label={`Sem 1`}
                     name="semester"
                     value={"Sem 1"}
                     onChange={(e)=>setSemester(e.target.value)}
                   />
                   <Form.Check
                     type={"radio"}
                     label={`Sem 2`}
                     name="semester"
                     value={"Sem 2"}
                     onChange={(e)=>setSemester(e.target.value)}
                   />
                   <Form.Check
                     type={"radio"}
                     label={`Sem 3`}
                     name="semester"
                     value={"Sem 3"}
                     onChange={(e)=>setSemester(e.target.value)}
                   />
                   <Form.Check
                     type={"radio"}
                     label={`Sem 4`}
                     name="semester"
                     value={"Sem 4"}
                     onChange={(e)=>setSemester(e.target.value)}
                   />
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div>
          <h1 className='text-center p-2 '>Student Management System</h1>
        </div>
        {
          showspin ? <Spiner /> : <Tables
                                    userdata={userdata}
                                    deleteUser={deleteUser}
                                    userGet={userGet}
                                    handlePrevious={handlePrevious}
                                    handleNext={handleNext}
                                    page={page}
                                    pageCount={pageCount}
                                    setPage={setPage}
                                  />
        }

      </div>
    </>
  )
}

export default Home