import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Actions from "./Actions";
import client from "../setup/axiosClient";
import checkLogin from "../utils/checkLogin";

export default function CustomerAddressRow({ address, getDetails }) {
    const navigate = useNavigate();

    function onEditClick() {
        navigate(`/profile/addresses/${address.id}/edit`, {
            state: { address: address },
        });
      
    }
    console.log("address", address)
    async function onDeleteClick() {
        const loginInfo = checkLogin();
        const response = await client.delete(`user/address/${address.id}/`, {
            headers: { Authorization: `token ${loginInfo.token}` },
        });
        if (response.data.status === true) {
            getDetails();
        }   
    }

    return (
        <Box key={address.id} w="100%">
            <Flex py={2} justify="space-between" align="center">
                <Flex direction={{ base: "column-reverse", lg: "row" }} gap={2}>
                    <Text w="50vw">
                        <Text as="span" fontWeight="bold">
                            {address?.full_name
                                ? `${address?.full_name} - `
                                : null}
                        </Text>
                        {`
                        ${
                            address?.mobile

                                ? address.mobile
                                + ", "
                                : ""
                        }
                        ${
                            address.address_line_1
                                ? address.address_line_1 + ", "
                                : ""
                        }
                                ${
                                    address.address_line_2
                                        ? address.address_line_2 + ", "
                                        : ""
                                }
                                ${
                                    address.landmark
                                        ? address.landmark + ", "
                                        : ""
                                }
                                ${
                                    address.city_obj
                                        ? address.city_obj.name + ", "
                                        : ""
                                }
                                ${
                                    address.state_obj
                                        ? address.state_obj.name
                                        : ""
                                }
                                ${
                                    address.postal_code
                                        ? " - " + address.postal_code
                                        : ""
                                }`}
                    </Text>
                </Flex>
                {/* <Badge
                    bg={"brand.900"}
                    color="white"
                    fontSize={"xs"}
                    h="fit-content"
                    w="fit-content"
                >
                    {address?.address_tags}
                </Badge> */}
                <Actions
                    borderDisplay={false}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                />
            </Flex>
        </Box>
    );
}
