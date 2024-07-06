import Header from "./components/Header";
import FormBase from "./components/FormBase";
import PostHeader from "./components/PostHeader";
import ContentPost from "./components/ContentPost";

function App() {
   return (
    <>
    <Header className="bg-slate-50 flex p-3 shadow-xl items-center ">
      <h1 className="ml-5 font-bold text-2xl">FS34Blog</h1>
      <FormBase className="ml-5 ">
        <input className="rounded-md border-slate-950 border" type="text"  />
        <button className="bg-black text-white  p-1 rounded-md ml-3" >Pesquisar</button>
      </FormBase>

    </Header>
    <PostHeader />
    <ContentPost />
    </>

  )
}

export default App