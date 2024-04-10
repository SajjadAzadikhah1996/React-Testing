import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div data-testid='signIn-component' className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='mb-8'>
                <input type="text" placeholder='Search' className='border-2 border-gray-400'/>
            </div>
            <form className='bg-gray-50 p-8'>
                <legend className='font-bold my-4'>SignIn</legend>
                <div>
                    <label htmlFor='email'>email</label><br/>
                    <input type="text" id='email' name='email' className='outline-none border-2 border-gray-400'/>
                </div>
                <div>
                    <label htmlFor='password'>
                        password
                        <br/>
                        <input type="password" id='password' name='password'
                               className='outline-none border-2 border-gray-400'/>
                    </label>
                </div>
                <div>
                    <label htmlFor='remember_me'>
                        <input type="checkbox" id='remember_me' name='remember_me' defaultChecked={true}/>
                        &nbsp;remember me
                    </label>
                </div>
                <button className='w-full text-center bg-gray-600 text-white'>submit</button>
                <span title='OAuth'>SignIn with</span>
                <div className='flex items-center'>
                    <Image src="/github.png" width='36' height='36' alt="github"/>
                    <Image src="/google.webp" width='64' height='64' alt="google"/>
                </div>
                <div>
                    <span>How to send verification code?</span><br/>
                    <select data-testid='verification-code'>
                        <option value="SMS">SMS</option>
                        <option value="Email">Email</option>
                        <option value="Call">Call</option>
                    </select>
                </div>
                <Link href='/sign-up'>No account yet?</Link>
            </form>
        </div>
    )
}