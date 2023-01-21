import {
  IconArticle,
  IconCommand,
  IconDeviceLaptop,
  IconHome,
  IconNews,
  IconSearch,
} from '@tabler/icons'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Command, CommandInput, CommandList, CommandOption } from 'superkey'

export default function CommandPalette ()  {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Actions =>
  const actions = [
    {
      id: 1,
      name: 'Home',
      icon: <IconHome size={18} />,
      shortcut: ['H'],
      action: () => router.push('/'),
    },
    {
      id: 2,
      name: 'Blog',
      icon: <IconArticle size={18} />,
      shortcut: ['B'],
      action: () => router.push('/blog'),
    },
    {
      id: 3,
      name: 'Tech',
      icon: <IconDeviceLaptop size={18} />,
      shortcut: ['T'],
      action: () => router.push('/tech'),
    },
    {
      id: 4,
      name: 'Newletter',
      icon: <IconNews size={18} />,
      shortcut: ['N'],
      action: () => router.push('/newsletter'),
    },
  ]



  // Ctrl+k to open command =>
  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === 'k' && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault()
        setOpen(!open)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [open])

  // Filter data =>
  const filteredData = query
    ? actions.filter((action) =>
        action.name.toLowerCase().includes(query.toLowerCase())
      )
    : actions

  return (
    <>
      <button
        className="p-2 transition-colors duration-100 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
        onClick={() => setOpen(!open)}
      >
        <IconCommand />
      </button>
      <Command
        open={open}
        onClose={() => setOpen(false)}
        afterLeave={() => {
          setQuery('')
        }}
        commandFunction={() => {
          setOpen(false)
        }}
        overlayClassName="bg-gray-300/60 dark:bg-zinc-900/60"
        className=" bg-slate-50 ring-1 ring-black/10 dark:bg-zinc-800 dark:ring-white/20"
      >
        <CommandInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value)
          }}
          inputClassName=""
          className=""
        />
        <CommandList>
          {filteredData.map((cmd) => (
            <CommandOption
              key={cmd.id}
              value={cmd.action}
              activeClassName="bg-gray-100 dark:bg-zinc-700/25 rounded-lg"
            >
              <div className="flex items-center justify-between py-1 space-x-1">
                <div className="flex items-center space-x-1">
                  <div className="mr-2 dark:text-white">{cmd.icon}</div>
                  <h1 className="dark:text-white">{cmd.name}</h1>
                </div>
                <div className="flex items-center space-x-1">
                  {cmd.shortcut.map((shortcut) => (
                    <span
                      key={shortcut}
                      className="p-2 text-xs lowercase border rounded-md border-zinc-300 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-200"
                    >
                      {shortcut}
                    </span>
                  ))}
                </div>
              </div>
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </>
  )
}

