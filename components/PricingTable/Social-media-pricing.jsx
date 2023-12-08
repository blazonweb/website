import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('basic')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'basic' ? "active" : ""} onClick={()=>setTab('basic')}>Basic</li>
        <li className={tab === 'premium' ? "active" : ""} onClick={()=>setTab('premium')}>Premium</li>
      </ul>
      {tab=='basic'&&(
        <h2 style={{textAlign:'center'}}>Basic Plan</h2>
        
      )}
      {tab=='premium'&&(
        <h2 style={{textAlign:'center'}}>Premium Plan</h2>
      )}
          <Spacing lg="30" md="40" />
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='basic' && (
            <PricingTable 
              title='Extended'
              price='2000'
              currency='₹'
              timeline='10 Days'
              features={['1 Design', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  50k-100k','Lead ad - 5k-10k']}
              btnText='Whatsapp Now'
              btnLink='/'
            />
          )}
          {tab==='premium' && (
            <PricingTable 
              title='Standard'
              price='5000'
              currency='₹'
              timeline='10 Days'
              features={['2 Design', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  250k-350k','Lead ad - 10k-20k']}
              btnText='Whatsapp Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='basic' && (
            <PricingTable 
              title='Pro'
              price='4000'
              currency='₹'
              timeline='20 Days'
              features={['2 Design ', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  100k-250k','Lead ad - 8.5k-20k']}
              btnText='Whatsapp Now'
              btnLink='/'
            />
          )}
          {tab==='premium' && (
            <PricingTable 
              title='Plus'
              price='10000'
              currency='₹'
              timeline='20 Days'
              features={['4 Design ', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  350k-650k','Lead ad - 20k-30k']}
              btnText='Whatsapp Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='basic' && (
            <PricingTable 
              title='Pro+'
              price='6000'
              currency='₹'
              timeline='30 Days'
              features={['3 Design ', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  260k-390k','Lead ad - 12k-30k']}
              btnText='Whatsapp Now'
              btnLink='/'
            />
          )}
          {tab==='premium' && (
            <PricingTable 
              title='Solid'
              price='15000'
              currency='₹'
              timeline='30 Days'
              features={['6 Design ', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  650k-800k','Lead ad - 30k-50k']}
              btnText='Whatsapp Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
