<template>
    <section class="contact">
        <div class="container">
            <h1>Contact Me</h1>
            <div class="contact__content">
                <div class="contact__content-left">
                    <div>
                        <i class="fal fa-envelope"></i>
                        <a href="">saidaxrorpc7@gmail.com</a>
                    </div>
                    <div>
                        <i class="fal fa-phone-rotary"></i>
                        <a href="tel:+998991228841">+998 99 122 88 41</a>
                    </div>
                    <div>
                        <i class="fal fa-folder-open"></i>
                        <a href="https://axreer.vercel.app" target="blank">https://axreer.vercel.app</a>
                    </div>
                </div>
                <div class="contact__content-right">
                    <form action="" class="contact__content-right-form" @submit.prevent>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
