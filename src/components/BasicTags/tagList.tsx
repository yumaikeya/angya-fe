import { Badge, Stack, For } from "@chakra-ui/react"

  type Props = {
    tags: string[]
    selected?: string
    onClick?: (tag: string) => void
}
  const TagList = ({tags, selected, onClick}: Props) => {

      return (
        <Stack direction="row">
          <For each={tags}>
          {
            (item) => <Badge
              key={item}
              size={"lg"}
              colorPalette={selected === item ? "blue" : ""}
              onClick={() => onClick(item)}
            >
              {item}
            </Badge>
          }
          </For>
        </Stack>
      )
}    
  
  export default TagList