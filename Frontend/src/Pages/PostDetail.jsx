import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../Component/PostAuthor'
import post5 from '../assets/Img-5.png'

const PostDetail = () => {
  return (
        <section className='w-[70%] m-auto bg-purple-200 p-[2rem]'>
            <div className='container post-detail_container p-[2rem] inline-block m-auto'>
                <div className='flex justify-between mb-[1.5rem]'>
                    <PostAuthor/>
                    <div className='post-detail_button items-center gap-[2rem] mb-[1.5rem]'>
                        <Link to={`/posts/10/edit`} className='px-4 rounded-md mt-5 py-1 bg-green-500 text-white'>Edit</Link>
                        <Link to={`/posts/10/delete`} className='px-4 rounded-md mt-5 py-1 bg-red-500 text-white'>Delete</Link>
                    </div>
                </div>
                <h1>the post that will change your life</h1>
                <div className='p-[2rem] mx-[1rem] my-0 h-fit overflow-hidden max-h-[30rem]'>
                    <img src={post5} className='overflow-hidden' alt=" " />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque tempore ipsa commodi omnis assumenda deleniti dicta mollitia aperiam deserunt voluptas fugiat aliquid, tempora veritatis ullam expedita est sapiente velit explicabo inventore quia. Aliquid suscipit consequuntur aliquam quod sapiente. Fuga esse veniam quidem reiciendis error dignissimos aliquam, atque placeat et?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, explicabo? Aliquid repudiandae illum voluptas incidunt et quas culpa cum molestias? Ducimus, alias inventore consequatur optio corrupti, deserunt commodi quidem repellendus nobis dicta rerum aliquid eligendi earum. Culpa, dolores sit dolorum reiciendis fugiat architecto officia veniam quae doloremque nulla, voluptatibus fugit neque tempora! Obcaecati incidunt minima a veritatis, nesciunt consequatur odio.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum tempora nulla aliquam culpa iure ad, praesentium sequi? Provident dolores doloribus facilis voluptatibus nostrum, molestias voluptates quasi deserunt iusto voluptatem obcaecati dignissimos rem qui sapiente assumenda, necessitatibus dolor ipsam laboriosam placeat commodi sed. Maxime, dolore, eos nisi odit reprehenderit pariatur omnis dolorum placeat enim incidunt repellendus dicta culpa recusandae? Aliquam non maiores quasi ea consectetur omnis a officiis consequuntur facilis?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum beatae ab placeat enim eaque. Nam, maxime alias est unde quas a. Impedit ex maiores labore commodi aliquam in minima!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odio qui adipisci, incidunt magni quas, a officia veniam atque distinctio nostrum quos at minima. Culpa nobis quisquam assumenda ad, dignissimos cupiditate ea atque? Molestias fugit minima repellendus a voluptatum ex in odio mollitia! Atque nam voluptas magnam fuga repellat corrupti necessitatibus placeat, repudiandae facere dolores. Inventore voluptate, ratione maiores non labore neque. Voluptatem illum dolorem suscipit possimus accusamus nam inventore magni quidem deserunt, reprehenderit voluptate vitae placeat? Aliquid nulla, illum corporis accusantium esse nostrum ad, aperiam amet at ab ratione quidem, consequatur voluptates rem qui perferendis quibusdam deserunt debitis. Amet dicta repellendus, ea optio qui a consequatur saepe repudiandae tenetur provident ad veritatis nihil esse animi natus voluptatum quaerat illum iure cupiditate magnam. Quidem voluptate doloremque nobis quia cum numquam sequi eligendi exercitationem quasi quibusdam quos perspiciatis consectetur placeat amet, repellat qui? Necessitatibus sequi officiis vel commodi facilis, eligendi cumque, beatae exercitationem, nulla cupiditate mollitia dolore soluta aliquid! Enim quidem, qui molestias delectus impedit ducimus exercitationem ab maiores aliquid corporis nesciunt sed ipsa possimus, veniam vitae repudiandae veritatis voluptatibus obcaecati unde porro necessitatibus officiis voluptatum distinctio blanditiis? Tempora officiis corrupti natus rerum, praesentium debitis quasi quaerat quia eaque voluptatibus ratione optio perspiciatis incidunt aspernatur vero quae temporibus velit earum sint! Incidunt nesciunt accusantium saepe itaque voluptatum. Odio consectetur, dignissimos quasi dolorem libero voluptate. Incidunt error repellendus culpa rem dolor! Amet modi iure nihil ipsa, ad unde accusantium ipsam maxime, pariatur mollitia consectetur dolore quam necessitatibus in quidem rem consequatur molestias nesciunt nulla! Voluptatibus itaque, eligendi officia illum velit dolor reprehenderit, aut non error beatae fuga alias? Saepe, repellendus voluptatum. Eaque a id sapiente eos, praesentium, quos doloremque iste tenetur odit dicta officia neque corporis tempore excepturi repudiandae voluptatem accusantium non aliquid est maxime amet quasi animi suscipit error? Quaerat, alias.
                </p>
            </div>
        </section>
  )
}

export default PostDetail
