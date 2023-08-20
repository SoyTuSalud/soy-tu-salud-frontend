import { SSRConfig, useTranslation } from 'next-i18next'
import { ReactElement } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import Navbar from '@/src/components/layouts/supplier/components/Navbar'

interface propsLayout {
  _nextI18Next: SSRConfig
  children: ReactJSXElement
}

export const SupplierLayout = ({ children, _nextI18Next }: propsLayout) => {
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <div className="bg-[#FEFEFE]">
        <main className="container h-full">
          <div className="mt-6 mb-9 md:mt-9 md:mx-9 space-y-9 text-center md:text-left">
            {children}
          </div>
        </main>
      </div>
      <footer className="h-12 bg-white-ghost" />
    </>
  )
}

export const getLayout = (page: ReactElement, props: any) => {
  return (
    <SupplierLayout _nextI18Next={props._nextI18Next}>{page}</SupplierLayout>
  )
}
