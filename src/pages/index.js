import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <SEO title="首页" keywords={['gatsby', 'application', 'react']} />
    <div>
      <div className="PageIndex">
        <div className="IndexHead">
          <h1 className="IndexTitle">
            <span data-index="1">这个圣诞「石❤夏」</span>
            <span data-index="2">falllin.love ON THE AIR!</span>
          </h1>
          <div className="IndexContent">
            <span>falllin.love 是石先生与夏小姐用来记录重要时刻的小站。</span>
            <span>如果没有任何更新…也不要奇怪，因为有人很懒...</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>

      </div>
      <div className="Cards">
        <h2>影像快照</h2>
        <div className="CardGroup">
          <Card
            title="拥抱"
            text="2018.12"
            image={require('../images/img-clip-01.jpg')}
            alt="拥抱"
             />
          <Card
            title="双姝"
            text="2018.12"
            image={require('../images/img-clip-02.jpg')}
            alt="双姝"
             />
          <Card
            title="蛇口"
            text="2018.12"
            image={require('../images/img-clip-03.jpg')}
            alt="蛇口"
             />
          <Card
            title="肯德基外的墙"
            text="2018.11"
            image={require('../images/img-clip-04.jpg')}
            alt="肯德基外的墙"
             />
          <Card
            title="渔人码头"
            text="2018.11"
            image={require('../images/img-clip-05.jpg')}
            alt="渔人码头"
             />
          <Card
            title="霓虹"
            text="2018.10"
            image={require('../images/img-clip-06.jpg')}
            alt="霓虹"
             />
        </div>
      </div>
      <div className="Footer">
        <div className="FootGroup">
          <div className="FooterContent">
            <div className="FooterTop">
              <div className="Talk">
                <span className="TalkTitle">有话要说？</span>
                <span className="MailTo"><a href="mailto:latuna2009@gmail.com">latuna2009@gmail.com</a></span>
              </div>
              <div className="FooterLogo">
                <img src={require('../images/logo-white.svg')} alt="「石与夏」" width="128"></img>
              </div>
            </div>
          </div>
          <div className="Copyright">
            <p>Copyright © 2018 falllin.love</p>
          </div>
        </div>
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link>
      <Image /> */}
    </div>
  </Layout>
)

export default IndexPage
