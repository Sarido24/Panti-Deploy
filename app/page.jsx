"use client";

import { Carousel } from "@material-tailwind/react";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
export default function Home() {
  return (
    <>
      <div className="mt-10">
        <Carousel className="rounded-xl relative h-3/5 sm:h-4/5 ">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="w-full object-cover"
            style={{ height: "500px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="w-full object-cover"
            style={{ height: "500px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="w-full object-cover"
            style={{ height: "500px" }}
          />
        </Carousel>
        <h1 className="text-4xl sm:text-8xl font-bold text-left mb-5 absolute top-56 left-56 opacity-50 text-white">
          For Hu<span className="text-red_0">manity</span>
        </h1>
      </div>

      {/* Perkenalan */}
      <div className="pt-introduction">
        <div className="pt-header">
          Safe Our <span className="fill">Unity</span>
        </div>
        <div className="pt-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          deleniti fugit quia labore dolor ratione tenetur aliquid cum repellat.
          A corporis maiores sunt eaque! Tempora reprehenderit nobis veritatis
          eum ut.
        </div>
      </div>

      {/* VISI DAN MISI */}
      <div className="pt-container">
        <div className="pt-header">VISI & MISI</div>
        <div className="pt-vsms">
          <div className="pt-subheader">
            <div className="pt-stitle">Visi</div>
            <div className="pt-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus laborum corporis repellendus ad, magnam pariatur
              dolorem quae cumque quo et asperiores placeat ipsa quas nihil modi
              dolore odit, voluptatem deserunt.
            </div>
          </div>
          <div className="pt-subheader">
            <div className="pt-stitle">Misi</div>
            <div className="pt-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus laborum corporis repellendus ad, magnam pariatur
              dolorem quae cumque quo et asperiores placeat ipsa quas nihil modi
              dolore odit, voluptatem deserunt.
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="pt-footer-container">
        <div className="pt-footer-subcontainer">
          <div className="pt-footer-header">Hubungi Kami</div>
          <div className="pt-footer-paragraph"><EmailIcon></EmailIcon> panti@mail.com</div>
          <div className="pt-footer-paragraph"><WhatsAppIcon></WhatsAppIcon><a href="https://wa.me/082287554">Go to WhatsApp</a></div>
          <div className="pt-footer-paragraph"><HomeIcon></HomeIcon> Jl.Kasim 5</div>
        </div>
        <div className="pt-footer-subcontainer">
          <div className="pt-footer-header">Jadwal</div>
          <div className="pt-footer-paragraph">Senin</div>
          <div className="pt-footer-paragraph">Selasa</div>
          <div className="pt-footer-paragraph">Rabu</div>
          <div className="pt-footer-paragraph">Kamis</div>
          <div className="pt-footer-paragraph">Jumat</div>
          <div className="pt-footer-paragraph">Sabtu</div>
          <div className="pt-footer-paragraph">Minggu</div>
        </div>
     
        <div id="pt-footer-subcontainer2">
          <div className="pt-footer-item"></div>
          <div className="pt-footer-item"></div>
          <div className="pt-footer-item"></div>
        </div>
        

        
      </footer> */}
    </>
  );
}
