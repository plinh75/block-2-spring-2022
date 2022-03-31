import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <footer id="footer" className="bg-black">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between">
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-lg uppercase text-white mb-2 font-bold">
                                Shop son môi
                            </h3>
                            <p className="text-white text-base mb-2">
                                Địa chỉ: 28, Tô Vĩnh Diện, Thủ Đức, HCM
                            </p>
                            <p className="text-white text-base mb-2">Điện thoại: 0888 75 80 85</p>
                            <p className="text-white text-base mb-2">Email: info@shopsonmoi.vn</p>
                            <div className="text-white mb-2">
                                <i className="fa-brands fa-facebook-f" style={{ padding: 6, border: '1px solid', borderRadius: '50%' }} />
                                <i className="fa-brands fa-pinterest" style={{ padding: 6, border: '1px solid', borderRadius: '50%' }} />
                                <i className="fa-brands fa-instagram" style={{ padding: 6, border: '1px solid', borderRadius: '50%' }} />
                                <i className="fa-brands fa-youtube" style={{ padding: 6, border: '1px solid', borderRadius: '50%' }} />
                            </div>
                            <div>
                                <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=02548463-9777-4a62-851a-4cd493bb4ec1" />
                            </div>
                        </div>
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-lg uppercase text-white mb-2 font-bold">
                                Shop son môi
                            </h3>
                            <ul>
                                <li>
                                    <a href="#" className="text-white text-base"> Son Givenchy </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-base"> Son Guerlain </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-base"> Son Laneige </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-base"> Son Marc Jacobs </a>
                                </li>
                                <li><a href="#" className="text-white text-base"> Son 3CE </a></li>
                                <li><a href="#" className="text-white text-base"> Son MAC </a></li>
                            </ul>
                        </div>
                        <div>
                            <iframe width="350px" height="250px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=false&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6dd0e6cd1ba98%26domain%3Dshopsonmoi.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fshopsonmoi.vn%252Ff1f81aa56aa1c4%26relation%3Dparent.parent&container_width=350&height=250&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FShopSonMoiVietNam&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=350" style={{ border: 'none', visibility: 'visible', width: 350, height: 130 }} />
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer