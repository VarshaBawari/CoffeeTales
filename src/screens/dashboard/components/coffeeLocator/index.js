import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNearByCafes, shouldShowDetailedView } from './redux/dispatcher'
import { buildUrl } from '../../../../utils/urlHelper'
import { AirbnbRating } from 'react-native-ratings';
import DetailedView from './detailedView'
import ProgressiveImage from '../../../../components/progressiveImage'
import styles from "./styles"
import { API, API_KEY } from "../../../../constants"
class CoffeeLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nearByCafes: this.props.nearByCafes,
            selectedItem: null,
        }
    }
    componentDidMount() {
        this.props.getNearByCafes()
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps && nextProps.nearByCafes) {
            return true
        }
        return false
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.nearByCafes) {
            this.setState({
                nearByCafes: nextProps.nearByCafes
            })
        }
    }
    _keyExtractor = (item, index) => { item.id };

    render() {
        return (
            <View style={{ ...styles.tabContainer }}>
                <FlatList style={{ ...styles.listContainer }}
                    data={this.state.nearByCafes}
                    keyExtractor={(this._keyExtractor.bind(this))}
                    initialNumToRender={2}
                    renderItem={({ item }) => {
                        var uri = ""
                        if (item.photos && item.photos.length > 0) {
                            uri = buildUrl(API.PLACE_PHOTO, {
                                photoreference: item.photos[0].photo_reference,
                                maxwidth: 400,
                                key: API_KEY.GOOGLE_PLACES,
                            })
                        }
                        return (
                            <View style={{ ...styles.itemContainer }}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        selectedItem: item
                                    })
                                    this.props.shouldShowDetailedView(true)
                                }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <ProgressiveImage style={{ ...styles.locationImage }}
                                            uri={uri}
                                        />
                                        <View style={{ ...styles.dataContainer }}>
                                            {
                                                item.name &&
                                                <Text
                                                    numberOfLines={1}
                                                    style={{ ...styles.title }}>
                                                    {item.name}
                                                </Text>
                                            }

                                            {
                                                item.rating &&
                                                <View style={{ ...styles.ratingContainer }}>
                                                    <Text style={{ ...styles.ratingText }}>
                                                        {item.rating}
                                                    </Text>
                                                    <AirbnbRating
                                                        starContainerStyle={{
                                                            ...styles.ratingInnerContainer
                                                        }}
                                                        size={15}
                                                        isDisabled={true}
                                                        showRating={false}
                                                        defaultRating={item.rating}
                                                    />
                                                    {
                                                        item.user_ratings_total &&
                                                        <Text style={{ ...styles.ratingLabel }}>
                                                            {"(" + item.user_ratings_total + ")"}
                                                        </Text>
                                                    }
                                                </View>

                                            }

                                            {
                                                item.vicinity &&
                                                <Text style={{ ...styles.ratingLabel, paddingTop: 5 }} numberOfLines={1}>
                                                    {item.vicinity}
                                                </Text>
                                            }

                                            {
                                                item.opening_hours &&
                                                <Text style={{ fontSize: 10, color: item.opening_hours.open_now ? "green" : "gray", paddingTop: 5 }}>
                                                    {item.opening_hours.open_now ? "OPEN NOW" : "CLOSED"}
                                                </Text>
                                            }

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                {this.props.showDetailedView && this.state.selectedItem &&
                    <DetailedView isVisible={this.props.showDetailedView} data={this.state.selectedItem} />
                }
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        loadingNearByCafes: state.nearByCafeReducer.loadingNearByCafes,
        nearByCafes: state.nearByCafeReducer.nearByCafes,
        errorMessageNearByCafes: state.nearByCafeReducer.errorMessageNearByCafes,
        isSearchingNearByCafes: state.nearByCafeReducer.isSearchingNearByCafes,
        loadingNearByCafeSearch: state.nearByCafeReducer.loadingNearByCafeSearch,
        searchedNearByCafes: state.nearByCafeReducer.searchedNearByCafes,
        errorMessageNearByCafeSearch: state.nearByCafeReducer.errorMessageNearByCafeSearch,
        next_page_token: state.nearByCafeReducer.next_page_token,
        showDetailedView: state.nearByCafeReducer.showDetailedView
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNearByCafes, shouldShowDetailedView }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeLocator)
