import MomentsList from "@/components/home/MomentsList";

const container = `max-w-[888px] mx-auto p-4 w-full`

export default function page(){
   return (
      <section className={container}>
         <MomentsList/>
      </section>
   )
}