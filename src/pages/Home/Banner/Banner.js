import styles from "./Banner.module.css";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { homePageBannerAPI } from "~/api";
import parse from "html-react-parser"

import { Button } from "~/components/Button";

const cx = classNames.bind(styles);

function Banner() {

    const [banner, setBanner] = useState('');
    
    useEffect(() => {
        homePageBannerAPI().then(res => setBanner(res))
    }, [])

    return (
    <section className={cx('banner-section')}>
        <div className={cx("inner", "global-inner")}>
            <div className={cx('text')}>
                {banner && parse(banner.text)}
                <Button type={'primary'}/>
            </div>
            <div className={cx('banner-image')}>
                {banner && <img src={banner.image.sourceUrl} alt="Banner" width={600} height={400} />}
            </div>
        </div>
    </section>
    );
}

export default Banner;