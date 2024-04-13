

import  {EventHeader}  from "@/app/admin/event/components/EventHeader"
import  UserForm  from "./UserForm"
import Layout from '../../../layout';
import Header from "@/app/admin/components/Header"

export default function AddMember(){

  return (
    <Layout>
    
          <Header />
          <EventHeader>Add Member</EventHeader>
           <UserForm/>
  
    </Layout>
  );
}
