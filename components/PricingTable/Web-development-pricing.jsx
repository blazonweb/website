import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('basic')
  return (
    <Section className="position-relative">
      {/* <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'basic' ? "active" : ""} onClick={()=>setTab('basic')}>Basic</li>
        <li className={tab === 'premium' ? "active" : ""} onClick={()=>setTab('premium')}>Premium</li>
      </ul> */}
      {tab=='basic'&&(
        <h2 style={{textAlign:'center'}}>Package Details</h2>
        
      )}
          <Spacing lg="30" md="40" />
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='basic' && (
            <PricingTable 
              title='Single Page Website'
              price='9000'
              currency='₹'
              timeline='10 Days'
              features={['Dynamic - CMS (You can update content)', 'Up to 5 Sections', 'Social Media Integration', 'Google Map Integration', 'Responsive' ,'WhatsApp Chat Integration']}
              btnText='Whatsapp Now'
              btnLink='https://api.whatsapp.com/send/?phone=917510800045'
            />
          )}
          {/* {tab==='premium' && (
            <PricingTable 
              title='Standard'
              price='5000'
              currency='₹'
              timeline='10 Days'
              features={['2 Design', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  250k-350k','Lead ad - 10k-20k']}
              btnText='Whatsapp Now'
              btnLink='https://api.whatsapp.com/send/?phone=917510800045'
            />
          )} */}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='basic' && (
            <PricingTable 
              title='Corporate Profile Website'
              price='17000'
              currency='₹'
              timeline='15 Days'
              features={['Dynamic - CMS (You can update content)', 'Up to 5 Pages (Extendable)', 'Social Media Integration', 'Google Map Integration', 'Contact Forms','WhatsApp Chat Integration']}
              btnText='Whatsapp Now'
              btnLink='https://api.whatsapp.com/send/?phone=917510800045'
            />
          )}
          {/* {tab==='premium' && (
            <PricingTable 
              title='Plus'
              price='10000'
              currency='₹'
              timeline='20 Days'
              features={['4 Design ', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  350k-650k','Lead ad - 20k-30k']}
              btnText='Whatsapp Now'
              btnLink='https://api.whatsapp.com/send/?phone=917510800045'
            />
          )} */}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='basic' && (
            <PricingTable 
              title='E-Commerce Website'
              price='49500'
              currency='₹'
              timeline='30 Days'
              features={['Free Domain', 'Free Hosting', 'Shopping Cart', 'Order Management', 'Highly Secured','Live Chat','Add & Manage Products','Logistic Integration','Shipping Calculation','Product Reports','Free Support','Unlimited Products','Free SSL','Mobile Compatability']}
              btnText='Whatsapp Now'
              btnLink='https://api.whatsapp.com/send/?phone=917510800045'
            />
          )}
          {/* {tab==='premium' && (
            <PricingTable 
              title='Solid'
              price='15000'
              currency='₹'
              timeline='30 Days'
              features={['6 Design ', '', 'Facebook', 'Instagram', 'Approximated Views', 'Publicity -  650k-800k','Lead ad - 30k-50k']}
              btnText='Whatsapp Now'
              btnLink='https://api.whatsapp.com/send/?phone=917510800045'
            />
          )} */}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
