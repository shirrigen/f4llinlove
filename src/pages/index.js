import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <SEO title="首页" keywords={['gatsby', 'application', 'react']} />
    <body>
      <div className="PageIndex">
        <div className="IndexHead">
          <h1 class="IndexTitle">
            <span data-index="1">这个圣诞「他❤她」</span>
            <span data-index="2">falllin.love ON THE AIR!</span>
          </h1>
          <div className="IndexContent">
            <span>falllin.love 是石先生与夏小姐用来记录重要时刻的小站，</span>
            <span>如果没有任何更新…也不要见怪，因为有人很懒...</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>

      </div>
      <div className="Cards">
        <h2>Clips</h2>
        <div className="CardGroup">
          <Card
            title="Huuuug"
            text="Dec"
            image={require('../images/img-clip-01.jpg')} />
          <Card
            title="Huuuug"
            text="Dec"
            image={require('../images/img-clip-02.jpg')} />
          <Card
            title="Huuuug"
            text="Dec"
            image={require('../images/img-clip-03.jpg')} />
          <Card
            title="Huuuug"
            text="Dec"
            image={require('../images/img-clip-04.jpg')} />
        </div>
      </div>




      <Link to="/page-2/">Go to page 2</Link>
      <Image />
    </body>
  </Layout>
)

export default IndexPage
