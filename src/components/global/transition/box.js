import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Box(props) {
  return (
    <Transition
        as={Fragment}
        show={props.isShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
    >                            
    <div className="bg-slate-200 border-slate-400 rounded shadow-lg p-6 m-4 w-60 border text-center">
        <div>
            {props.children}
        </div>
    </div>
    </Transition>
  )
}
