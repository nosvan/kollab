import axios from 'axios';
import SelectorCheckbox from 'components/layout/ui_components/selector_checkbox';
import ToggleSwitch from 'components/layout/ui_components/toggle_switch';
import { ItemApiRoutes, ListApiRoutes } from 'lib/api/api_routes';
import { EditItem, ItemSafe, ItemType, VisibilityLevel } from 'lib/types/item';
import { CheckDataItem, UsersWithPermissionForList } from 'lib/types/list';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface ItemEditProps {
  item: ItemSafe;
  modalOpen: Dispatch<SetStateAction<boolean>>;
  itemTypeStyling: (itemType: ItemType) => string;
}

export default function ItemEdit(props: ItemEditProps) {
  const { item, modalOpen, itemTypeStyling } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [visibilityControlCheck, setVisibilityControlCheck] = useState<boolean>(
    () => {
      if (item.permission_level === VisibilityLevel.PRIVATE) return true;
      else return false;
    }
  );
  const [usersWithPermissionToList, setUsersWithPermissionToList] = useState<
    UsersWithPermissionForList[]
  >([]);
  const [usersWithPermissionToListMapped, setUsersWithPermissionToListMapped] =
    useState<CheckDataItem[]>([]);
  const [itemPermissions, setItemPermissions] = useState<{ user_id: number }[]>(
    []
  );

  useEffect(() => {
    async function getListUsers() {
      await axios({
        method: 'get',
        url: ListApiRoutes.LIST_USERS,
        params: {
          list_id: item.category_id,
        },
      }).then((res) => {
        setUsersWithPermissionToList(res.data);
        const resDataMapped: CheckDataItem[] = res.data.map(
          (user: UsersWithPermissionForList) => {
            return {
              user_id: user.user_id,
              isChecked: false,
            };
          }
        );
        setUsersWithPermissionToListMapped(resDataMapped);
      });
    }
    getListUsers();
    async function getItemPermissions() {
      await axios({
        method: 'get',
        url: ItemApiRoutes.GET_ITEM_PERMISSIONS,
        params: {
          item_id: item.id,
        },
      }).then((res) => {
        const itemPermissionsMappedIsChecked: { user_id: number }[] =
          res.data.map((user: CheckDataItem) => {
            return {
              user_id: user.user_id,
            };
          });
        setItemPermissions(itemPermissionsMappedIsChecked);
      });
    }
    getItemPermissions();
  }, [item]);

  useEffect(() => {
    setUsersWithPermissionToListMapped((prevState) => {
      const newState = prevState.map((user) => {
        const userFound = itemPermissions.find(
          (item) => item.user_id === user.user_id
        );
        if (userFound) {
          return {
            user_id: user.user_id,
            isChecked: true,
          };
        } else return user;
      });
      return [...newState];
    });
    setEditModeFormValues((prevState) => {
      return { ...prevState, item_permissions: itemPermissions };
    });
  }, [itemPermissions]);

  const [editModeFormValues, setEditModeFormValues] = useState<EditItem>({
    name: item.name,
    description: item.description,
    category: item.category,
    category_id: item.category_id,
    item_type: ItemType[item.item_type as keyof typeof ItemType],
    date_tz_insensitive: item.date_tz_insensitive,
    date_tz_insensitive_end: item.date_tz_insensitive_end,
    time_sensitive_flag: item.time_sensitive_flag,
    date_tz_sensitive: item.date_tz_sensitive,
    date_tz_sensitive_end: item.date_tz_sensitive_end,
    date_range_flag: item.date_range_flag,
    permission_level:
      VisibilityLevel[item.permission_level as keyof typeof VisibilityLevel],
    item_permissions: itemPermissions,
  });

  useEffect(() => {
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;
      const textAreaRows = scrollHeight
        ? scrollHeight < 5
          ? 5
          : scrollHeight
        : 5;
      textAreaRef.current.style.height = `${textAreaRows}px`;
    }
  }, []);

  const [yupValidationError, setYupValidationError] = useState({});

  return (
    <div className="flex flex-col space-y-1 mx-1 pl-1">
      <span className="flex flex-row items-center">
        <input
          className={`flex-wrap text-white bg-stone-800 hover:bg-stone-700 w-full font-bold p-1 rounded-xl`}
          value={editModeFormValues.name}
          onFocus={() =>
            setYupValidationError({ ...yupValidationError, name: false })
          }
          onChange={(event) =>
            setEditModeFormValues({
              ...editModeFormValues,
              name: event.target.value,
            })
          }
        />
      </span>
      <div className="flex flex-row flex-wrap items-center">
        {Object.keys(ItemType).map((key) => (
          <span
            key={key}
            className={`${
              editModeFormValues.item_type ==
              ItemType[key as keyof typeof ItemType]
                ? `text-black ${itemTypeStyling(editModeFormValues.item_type)}`
                : 'bg-stone-800 hover:bg-stone-700 text-white'
            }
            )} text-xs px-2 py-1 cursor-pointer my-0.5 mr-0.5 rounded-xl`}
            onClick={() =>
              setEditModeFormValues({
                ...editModeFormValues,
                item_type: ItemType[key as keyof typeof ItemType],
              })
            }
          >
            {key}
          </span>
        ))}
      </div>
      {item.category && (
        <div className="flex flex-col space-y-1">
          <span className="flex flex-row items-center space-x-1">
            <label className="text-white px-1">control visibility</label>
            <ToggleSwitch
              isChecked={visibilityControlCheck}
              setIsChecked={setVisibilityControlCheck}
            ></ToggleSwitch>
          </span>
          {visibilityControlCheck && (
            <SelectorCheckbox
              data={usersWithPermissionToList}
              selected={usersWithPermissionToListMapped}
              setSelected={setUsersWithPermissionToListMapped}
            ></SelectorCheckbox>
          )}
        </div>
      )}
      <div className="flex flex-col">
        <label className="w-full text-white px-1">info</label>
        <textarea
          ref={textAreaRef}
          className="text-white bg-stone-800 hover:bg-stone-700 px-2 rounded-xl"
          value={editModeFormValues.description}
          onChange={(event) =>
            setEditModeFormValues({
              ...editModeFormValues,
              description: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
