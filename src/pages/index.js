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
            <span>如果没有任何更新…也不要见怪，因为有人很懒...</span>
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
            image={require('../images/img-clip-01.jpg')} />
          <Card
            title="双姝"
            text="2018.12"
            image={require('../images/img-clip-02.jpg')} />
          <Card
            title="蛇口"
            text="2018.12"
            image={require('../images/img-clip-03.jpg')} />
          <Card
            title="肯德基外的墙"
            text="2018.11"
            image={require('../images/img-clip-04.jpg')} />
          <Card
            title="渔人码头"
            text="2018.11"
            image={require('../images/img-clip-05.jpg')} />
          <Card
            title="霓虹"
            text="2018.10"
            image={require('../images/img-clip-06.jpg')} />
        </div>
      </div>




      {/* <Link to="/page-2/">Go to page 2</Link>
      <Image /> */}
    </div>
  </Layout>
)

export default IndexPage
