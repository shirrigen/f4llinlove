import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <SEO title="石&夏" keywords={['石里根','夏蓓蕾','石里根夏蓓蕾', 'blog', '摄影', '图集','设计']} />
    <div>
      <div className="PageIndex">
        <div className="IndexHead">
          <h1 className="IndexTitle">
            <span data-index="1">石里根 ❤ 夏蓓蕾</span>
            <span data-index="2">falllin.love ON THE AIR!</span>
          </h1>
          <div className="IndexContent">
            <span>falllin.love 是石先生与夏小姐用来记录重要时刻的小站。</span>
            <span>如果没有任何更新…也不要奇怪，因为有人很<del>忙</del>懒...</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      </div>
      <div className="Cards">
        <h2>影像快照</h2>
        <div className="CardGroup">
          <Card
            title="官宣"
            text="2019.02"
            image={require('../images/img-clip-12.jpg')}
            alt="官宣"
          />
          <Card
            title="冬至"
            text="2018.12"
            image={require('../images/img-clip-11.jpg')}
            alt="冬至"
          />
          <Card
            title="拥抱"
            text="2018.12"
            image={require('../images/img-clip-01.jpg')}
            alt="拥抱"
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
                <img src={require('../images/logo-white.svg')} alt="「石与夏」" height="128"></img>
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
