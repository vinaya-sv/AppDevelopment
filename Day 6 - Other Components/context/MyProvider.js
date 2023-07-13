import * as React from 'react'
import { MyContext } from './context';

const MyProvider = ({children}) => {
  React.useEffect(()=>{
    const storedValue = localStorage.getItem('value');
    if(storedValue){
          setValue(JSON.parse(storedValue));
        }
      const storedBookData=localStorage.getItem('book');
    if(storedBookData.name){
          setSelectedBook(storedBookData);
      }
    }, []);
    const [value, setValue] = React.useState("");
    const [isSideBarEnabled,setSideBarEnable]=React.useState(false);
    const [selectedBookData, setSelectedBook]=React.useState({});

    localStorage.setItem('isSideBarEnabled',isSideBarEnabled);


    const toggleSideBar=()=>{
      setSideBarEnable(!isSideBarEnabled);
      localStorage.setItem('isSideBarEnabled',isSideBarEnabled);
    }
    const updateValue = (newValue) => {
      setValue(newValue);
      localStorage.setItem('value', JSON.stringify(newValue))
    }
    const selectBook=(book)=>{
      setSelectedBook(book);
      localStorage.setItem('book',selectedBookData);
      localStorage.setItem('bookname',JSON.stringify(selectedBookData.name));
      console.log(selectedBookData);
      // console.log(selectedBookData);
    }

  return (
    <MyContext.Provider value={{value, updateValue, isSideBarEnabled, toggleSideBar, selectedBookData, selectBook}}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider;