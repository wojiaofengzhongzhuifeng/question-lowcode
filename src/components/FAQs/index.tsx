import {useEffect, useState} from 'react';
import * as React from 'react';

import {createPortal} from 'react-dom'
import './index.scss'
import SectionTitle from "../SectionTitle/index.js";



// const createPortal = ReactDOM.createPortal

export type FAQItemProps = {title: string, contentList: string[], isShow: boolean}

export interface FAQSProps{
  title?: string,
  FaqList: FAQItemProps[],
  isDark?:boolean,
  id?: string
}

export const initialFAQTitle = 'faq title'
export const initialFaqList = [

  {
    title:'title1',
    contentList: [
      'desc1-1',
      'desc1-2',

    ],
    isShow: true
  },

]




const FAQS: React.FC<FAQSProps> = function ({
  title = initialFAQTitle,
  FaqList = initialFaqList,
  isDark = false,
  id = 'test'
}) {

  const [data, setData] = useState(FaqList)
  const [hasHeader, setHasHeader] = useState(false)


  const StructuredData = () => {
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FaqList.map(item => {
        return {
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `<p>${item.contentList.map(context=>context)}</p>`
          }
        }
      })
    }
    const scripts = createPortal(
      // todo 删除 @ts-ignore
      // @ts-ignore
      <>
        <script type="application/ld+json" id="faq-data">
          {JSON.stringify(faq)}
        </script>
      </>, document.head
    )
    return <div>{!document.querySelector('#faq-data') && scripts}</div>
  }
  //
  useEffect(()=>{
    setTimeout(() => {
      window.$(function () {
        if(document.head) {
          setHasHeader(true)
        }
      });
    }, 300)
  }, [])

  // 点击展开卡片
  const handleClick = (idx) => {
    let list = data
    if (list[idx]) {
      list[idx] = { ...list[idx], ...{ isShow: !list[idx]?.isShow } }
    }
    setData([...list])
  }

  return (
    // todo 删除 @ts-ignore
    // @ts-ignore
    <>
      <div className={'FAQ'} id={id}>
        <SectionTitle title={title}/>
        <div className="FAQ-box">
          {
            data.map((item, idx) =>
              <div className={'FAQ-content'} key={item.title}>
                <h3 className={`FAQ-content-dis ${window.g_lang === 'ar' ? 'FAQs-content-disAr' : ''}`} onClick={() => handleClick(idx)}>
                  {item.title}
                  {
                    isDark ?
                      <span className="FAQ-content-dis-up">
										{item.isShow ? (
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 10L8 5L13 10" stroke="#3366FF" strokeWidth="2" strokeLinecap="square"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_380_6913)">
                          <path d="M3 6L8 11L13 6" stroke="white" strokeWidth="3" strokeLinecap="square"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_380_6913">
                            <rect width="16" height="16" fill="white" transform="matrix(-5.50037e-08 1 1 3.47374e-08 0 0)"/>
                          </clipPath>
                        </defs>
                      </svg>

                    )}
									</span>
                      :
                      <span className="FAQ-content-dis-dark_up">
										{
                      item.isShow? (
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 10L8 5L13 10" stroke="#3366FF" strokeWidth="2" strokeLinecap="square"/>
                        </svg>
                      ) : (
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3L8 8L13 3" stroke="#04091A" strokeWidth="3" strokeLinecap="square"/>
                        </svg>

                      )
                    }
									</span>
                  }


                </h3>
                <p className={'FAQ-content-ex'} style={item.isShow ? { display: 'block' } : { display: 'none' }}>
                  {item.contentList.map((context, index)=>{
                    return <p className="FAQ-content-ex-item" key={item.title+index}>{context}</p>
                  })}
                </p>
                {
                  idx < data.length - 1 && <div className={'FAQ-content-dis-border'}>
                  </div>
                }
              </div>
            )
          }
        </div>

      </div>
      {hasHeader && <StructuredData/>}
    </>
  )

  // return (
  //   <div >gate button 2023年05月05日18:12:13</div>
  // );
};


// FAQS.displayName = 'FAQS';

export default FAQS;
