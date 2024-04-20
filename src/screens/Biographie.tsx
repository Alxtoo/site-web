import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
    subject: string,
    email: string,
    message: string
}


export const Bio = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data)
    }


    return (
        <main>
            <h3 className="font-extrabold text-3xl flex justify-center mb-5">Bio</h3>


            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label className="block" htmlFor="subject">Sujet de la phrase</label>
                    <input {...register("subject")} className="border" type='text' placeholder="Écrit ici" name="subject" id="subject" />
                </div>

                <div className="mb-5">
                    <label className="block" htmlFor="email">Email</label>
                    <input {...register("email", {required: true })} className="border" type='email' placeholder="Mettez votre email ici" name="email" id="email" />

                    {errors.email && <p className="text-[red]">Email requis</p>}
                    
                </div>

                <div className="mb-5">
                    <label className="block" htmlFor="message">Message</label>
                    <textarea {...register("message")} rows={5} className="border resize-none" placeholder="Votre message" name="message" id='message' />
                </div>

               
                <input type='submit' className="block bg-[blue] text-[white] py-3 px-3 hover:bg-[gray]" />

            </form>
        </main>
    )
}