'use client'

import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';

export default function Footer() {
  return (
    <>
      <footer className="pt-footer-container">
        <div className="pt-footer-subcontainer">
          <div className="pt-footer-header">Hubungi Kami</div>
          <div className="pt-footer-paragraph">
            <EmailIcon></EmailIcon> panti@mail.com
          </div>
          <div className="pt-footer-paragraph">
            <WhatsAppIcon></WhatsAppIcon>
            <a href="https://wa.me/082287554">Go to WhatsApp</a>
          </div>
          <div className="pt-footer-paragraph">
            <HomeIcon></HomeIcon> Jl.Kasim 5
          </div>
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
      </footer>
    </>
  );
}
