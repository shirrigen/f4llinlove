import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="首页" keywords={['gatsby', 'application', 'react']} />
    <h1>这个圣诞「他❤她」<br/>falllin.love ON THE AIR!</h1>
    <p>falllin.love 是石先生与夏小姐用来记录重要时刻的小站，<br/>
如果没有任何更新…也不要见怪，因为我们很<span className="text-dec">懒</span>忙...</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
