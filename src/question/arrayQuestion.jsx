import React from 'react'
import PropTypes from 'prop-types'


const ArrayQuestion = () => {
  const arrItem = ["A", "B", "C", "D", "E"]
  const [itemList, setItemList] = React.useState(arrItem)

  function moveSelectedIndexToFirst(array, selectedIndex) {
    // Make a copy of the original array
    const newArray = array.slice();
    if (selectedIndex >= 0 && selectedIndex < newArray.length) {
      // Remove the element at the selected index
      const removedElement = newArray.splice(selectedIndex, 1)[0];
      // Insert the removed element at the beginning
      newArray.unshift(removedElement);
    }
    return setItemList(newArray);
  }

  React.useEffect(() => {
  }, [itemList])

  function ListToTop(props) {
    const { items } = props
    return (
      <ul>
        {items.map((item, index) =>
          <li key={index}
            className='flex items-center gap-5 w-[100px]'
          >
            <p className='text-5xl cursor-pointer flex-1'
            >{item}</p>
            <button
              className='bg-gray-200 py-1 px-2'
              onClick={() => moveSelectedIndexToFirst(items, index)}
            >^</button>
          </li>
        )}
      </ul>
    )
  }
  ListToTop.propTypes = {
    items: PropTypes.array.isRequired,
  }

  const [itemList2, setItemList2] = React.useState(arrItem)

  function handleRemoveSelectedItem(array, selectedIndex) {
    const newArray = array.slice();

    if (selectedIndex >= 0 && selectedIndex < newArray.length) {
      // Use splice to remove the element at the selected index
      newArray.splice(selectedIndex, 1);
    }

    return setItemList2(newArray);
  }

  function RemoveSelectedItem(props) {
    const { items } = props
    return (
      <ul>
        {items.map((item, index) =>
          <li key={index}
            className='flex items-center gap-5 w-[100px]'
          >
            <p className='text-5xl cursor-pointer flex-1'
            >{item}</p>
            <button
              className='bg-gray-200 py-1 px-2'
              onClick={() => handleRemoveSelectedItem(items, index)}
            >X</button>
          </li>
        )}
      </ul>
    )
  }
  RemoveSelectedItem.propTypes = {
    items: PropTypes.array.isRequired,
  }


  return (
    <div>
      <p>move selected list to first place</p>
      <ListToTop items={itemList} />
      <br /><br />
      <p>Remove Selected item</p>
      <RemoveSelectedItem items={itemList2} />
    </div>

  )
}

export default ArrayQuestion